import { useEffect, useRef, useState } from 'react';

function getFileExtension(fileName) {
  const pattern = /\.([0-9a-z]+)(?:[?#]|$)/i;
  const match = fileName.match(pattern);

  return match[1];
}
/**
 * Hook hỗ trợ việc chọn file và lấy thông tin các file
 * @param {{
 * inputRef: undefined;
 * }}
 * @returns
 */
// https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images
// https://www.bezkoder.com/react-hooks-file-upload/
function useFiles() {
  const inputFileRef = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [fileListInfos, setFileListInfos] = useState(undefined);
  const [fileInfos, setFileInfos] = useState(undefined);
  const [progress, setProgress] = useState(0);

  // chọn files
  const onSelectFiles = event => {
    const fileList = event.target.files;

    if (fileList.length > 0) {
      const fileListLength = fileList.length;
      const currentFileObj = fileList[0];

      setSelectedFiles(fileList);
      setSelectedFile(currentFileObj);

      const fileListData = [];

      for (let index = 0; index < fileListLength; index += 1) {
        const file = fileList[index];

        fileListData.push({
          id: index,
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          name: file.name,
          size: file.size,
          type: file.type,
          extension: getFileExtension(file.name),
          src: URL.createObjectURL(file), // blob
        });
      }

      setProgress(10);

      setTimeout(() => {
        setFileListInfos(fileListData);
        setFileInfos(fileListData[0]);
        setProgress(100);
      }, 2000);
    }
  };

  // xóa files
  const onRemoveFiles = () => {
    setSelectedFiles(undefined);
    if (inputFileRef) {
      inputFileRef.current.value = '';
    }
    // console.log('Removed files');
  };

  useEffect(() => {
    if (!selectedFiles) {
      setSelectedFile(undefined);
      setFileListInfos(undefined);
      setFileInfos(undefined);
      setProgress(0);
    }
  }, [selectedFiles]);

  const isLoadingFiles = progress > 0 && progress < 100;
  const isLoadedFiles = progress === 100;

  // console.log(
  //   '%c> useFiles > selectedFiles : ',
  //   'color: yellow',
  //   selectedFiles,
  // );
  // console.log('> selectedFile : ', selectedFile);
  // console.log('> fileListInfos : ', fileListInfos);
  // console.log('> fileInfos : ', fileInfos);
  // console.log('%c> progress : ', 'color: red', progress);

  return {
    inputFileRef,
    selectedFiles,
    selectedFile,
    fileListInfos,
    fileInfos,
    progress,
    isLoadingFiles,
    isLoadedFiles,
    onSelectFiles,
    onRemoveFiles,
  };
}

export { useFiles };
