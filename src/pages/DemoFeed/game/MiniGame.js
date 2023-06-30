'use client'
import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useFiles } from '../../api/useFiles';
import Image from 'next/image';
import miniGamePhoto from '../../image/miniGamePhoto.png';

const IMAGE = "https://media.hahalolo.com/2023/04/21/09/04/b229a2e095cea60f416bcc8852de1af4-1682067856_1080xauto_high.jpg.webp";
const MINIGAMEPHOTO = miniGamePhoto;

const NUM_ROWS = 4;
const NUM_COLS = 4;
const NUM_TILES = NUM_ROWS * NUM_COLS;
const EMPTY_INDEX = NUM_TILES - 1;
const SHUFFLE_MOVES_RANGE = [60, 80];
const MOVE_DIRECTIONS = ['up', 'down', 'left', 'right'];

function rand(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

class GameState {
  static getNewBoard() {
    return Array(NUM_TILES)
      .fill(0)
      .map((x, index) => [Math.floor(index / NUM_ROWS), index % NUM_COLS]);
  }

  static solvedBoard = GameState.getNewBoard();
  static instance = null;

  static getInstance() {
    if (!GameState.instance) GameState.instance = new GameState();
    return GameState.instance;
  }

  constructor() {
    this.startNewGame();
  }

  isSolved() {
    for (let i = 0; i < NUM_TILES; i++) {
      if (
        this.board[i][0] !== GameState.solvedBoard[i][0] ||
        this.board[i][1] !== GameState.solvedBoard[i][1]
      )
        return false;
    }
    return true;
  }

  startNewGame() {
    this.moves = 0;
    this.board = GameState.getNewBoard();
    this.stack = [];
    this.shuffle();
  }

  shuffle() {
    this.shuffling = true;
    let shuffleMoves = rand(...SHUFFLE_MOVES_RANGE);
    while (shuffleMoves-- > 0) {
      this.moveInDirection(MOVE_DIRECTIONS[rand(0, 3)]);
    }
    this.shuffling = false;
  }

  canMoveTile(index) {
    if (index < 0 || index >= NUM_TILES) return false;

    const tilePos = this.board[index];
    const emptyPos = this.board[EMPTY_INDEX];
    if (tilePos[0] === emptyPos[0])
      return Math.abs(tilePos[1] - emptyPos[1]) === 1;
    else if (tilePos[1] === emptyPos[1])
      return Math.abs(tilePos[0] - emptyPos[0]) === 1;
    else return false;
  }

  moveTile(index) {
    if (!this.shuffling && this.isSolved()) return false;
    if (!this.canMoveTile(index)) return false;

    const emptyPosition = [...this.board[EMPTY_INDEX]];
    const tilePosition = [...this.board[index]];

    let boardAfterMove = [...this.board];
    boardAfterMove[EMPTY_INDEX] = tilePosition;
    boardAfterMove[index] = emptyPosition;

    if (!this.shuffling) this.stack.push(this.board);
    this.board = boardAfterMove;
    if (!this.shuffling) this.moves += 1;

    return true;
  }

  undo() {
    if (this.stack.length === 0) return false;
    this.board = this.stack.pop();
    this.moves -= 1;
  }

  moveInDirection(dir) {
    const epos = this.board[EMPTY_INDEX];
    const posToMove =
      dir === 'up'
        ? [epos[0] + 1, epos[1]]
        : dir === 'down'
          ? [epos[0] - 1, epos[1]]
          : dir === 'left'
            ? [epos[0], epos[1] + 1]
            : dir === 'right'
              ? [epos[0], epos[1] - 1]
              : epos;
    let tileToMove = EMPTY_INDEX;
    for (let i = 0; i < NUM_TILES; i++) {
      if (
        this.board[i][0] === posToMove[0] &&
        this.board[i][1] === posToMove[1]
      ) {
        tileToMove = i;
        break;
      }
    }
    this.moveTile(tileToMove);
  }

  getState() {
    const self = this;
    return {
      board: self.board,
      moves: self.moves,
      solved: self.isSolved(),
    };
  }
}

function useGameState() {
  const gameState = GameState.getInstance();
  const [state, setState] = useState(gameState.getState());

  function newGame() {
    gameState.startNewGame();
    setState(gameState.getState());
  }

  function undo() {
    gameState.undo();
    setState(gameState.getState());
  }

  function move(index) {
    return function () {
      gameState.moveTile(index);
      setState(gameState.getState());
    };
  }

  useEffect(() => {
    function listeners(event) {
      if (event.key === 'ArrowLeft') gameState.moveInDirection('left');
      else if (event.key === 'ArrowUp') gameState.moveInDirection('up');
      else if (event.key === 'ArrowRight') gameState.moveInDirection('right');
      else if (event.key === 'ArrowDown') gameState.moveInDirection('down');

      setState(gameState.getState());
    }

    document.addEventListener('keyup', listeners);

    return () => {
      document.removeEventListener('keyup', listeners);
    };
  }, [gameState]);

  return [state.board, state.moves, state.solved, newGame, undo, move];
}



function Tile({ index, pos, onClick, src }) {
  const [top, setTop] = useState('')
  const [left, setLeft] = useState('')
  const bgLeft = (index % 4) * 100 + 5;
  const bgTop = Math.floor(index / 4) * 100 + 5;


  useEffect(() => {
    setTop(pos[0] * 100 + 5);
    setLeft(pos[1] * 100 + 5);
  }, [pos]);

  return (
    <Box
      onClick={onClick}
      sx={theme => ({
        width: theme.spacing(11.875),
        height: theme.spacing(11.875),
        position: 'absolute',
        background: 'white',
        transition: 'all 0.1 ease-in-out',
        borderRadius: theme.spacing(0.25),
        backgroundImage: `url(${src})`,
        backgroundSize: theme.spacing(50, 50),
        top,
        left,
        backgroundPosition: `-${bgLeft}px -${bgTop}px`,
      })}
    />
  );
}

export default function MiniGame() {
  const [board, moves, solved, newGame, undo, move] = useGameState();

  const inputCoverId = `input-image-id`;

  const { inputFileRef, fileInfos, onSelectFiles } = useFiles();

  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs='auto'>
        {/* <img
          alt='mini-game'
          width={400}
          height={500}
          src={fileInfos?.src || IMAGE}
        /> */}
        <Image
          alt='mini-game'
          width={400}
          height={500}
          src={fileInfos?.src || MINIGAMEPHOTO}
        />
        <input
          ref={inputFileRef}
          type="file"
          id={inputCoverId}
          accept="image/*"
          onChange={onSelectFiles}
          style={{ display: 'none' }}
        />
      </Grid>
      <Grid item xs='auto'>
        <Box sx={{
          width: '100%',
          height: '100%',
          minHeight: '80hv',
          display: 'flex',
        }}>
          <Box sx={theme => ({
            width: theme.spacing(50.625),
            height: theme.spacing(62.125),
            background: '#ececec',
            // outline: '1px black solid',
            borderRadius: theme.spacing(1),
          })}>
            <Box sx={theme => ({
              height: theme.spacing(7.5),
              display: 'flex',
              padding: theme.spacing(2),
            })}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <Typography
                    variant='h6'
                    sx={theme => ({ color: solved ? theme.palette.success.main : 'none' })}
                  >
                    <b>{solved ? 'Win!' : `Steps: ${moves}`}</b>
                  </Typography>
                </Grid>
                <Grid item >
                  <Button
                    component="label"
                    variant='contained'
                    htmlFor={inputCoverId}
                    onClick={undo}
                  >
                    Change
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant='outlined' onClick={undo}>Undo</Button>
                </Grid>
              </Grid>
            </Box>
            <Box sx={theme => ({
              width: theme.spacing(50.625),
              height: theme.spacing(50.625),
              position: 'relative',
              background: '#ddd',
            })}>
              {board.slice(0, -1).map((pos, index) => {
                const key = index;
                return (
                  <div key={key}>
                    <Tile index={index} pos={pos} src={fileInfos?.src || IMAGE} onClick={move(index)} />
                  </div>
                );
              })}
              {solved && (
                <Box sx={theme => ({
                  width: theme.spacing(50.625),
                  height: theme.spacing(50.625),
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  background: '#0004',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}>
                  <Button variant='contained' onClick={newGame}>
                    Play again
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid >
  );
}
