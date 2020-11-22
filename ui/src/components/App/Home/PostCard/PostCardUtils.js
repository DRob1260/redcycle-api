const generateDescriptionPreview = (description) => {
  if (description.length >= 100) {
    return description.substring(0, 150) + '...';
  } else return description;
};

export { generateDescriptionPreview };
