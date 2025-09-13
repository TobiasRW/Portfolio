const highlightText = (text: string, highlightWords: string[]) => {
  const lowerHighlightWords = highlightWords.map((hw) => hw.toLowerCase()); // Normaliser
  return text.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[,!?]/g, "").toLowerCase(); // Fjern tegnsætning og normaliser
    const isHighlighted = lowerHighlightWords.includes(cleanWord);

    return (
      <span key={index} className={isHighlighted ? "font-normal italic" : ""}>
        {word}
        {index < text.split(" ").length - 1 && " "} {/* Tilføj mellemrum */}
      </span>
    );
  });
};

export default highlightText;
