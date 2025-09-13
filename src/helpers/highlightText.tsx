const highlightText = (text: string, highlightWords: string[]) => {
  const lowerHighlightWords = highlightWords.map((hw) => hw.toLowerCase());
  return text.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[,!?.]/g, "").toLowerCase();
    const isHighlighted = lowerHighlightWords.includes(cleanWord);

    return (
      <span key={index} className={isHighlighted ? "font-normal italic" : ""}>
        {word}
        {index < text.split(" ").length - 1 && " "}
      </span>
    );
  });
};

export default highlightText;
