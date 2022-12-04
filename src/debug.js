const log = (message, content) => {
  if (content) {
    console.groupCollapsed(message);
    console.info(content);
    console.groupEnd();
  } else console.info(message);
};

export default log;
