const shapeTwitterData = (item) => {
  const {item_data: itemData } = item;
  const shaped = {
    ...item,
    ...itemData,
    type: 'twitter'
  };
  return shaped;
};

const shapeInstagramData = (item) => {
  const shaped = {
    ...item,
    type: 'instagram'
  };
  return shaped;
};

const shapeManualData = (item) => {
  const shaped = {
    ...item,
    type: 'manual'
  };
  return shaped;
};

const shapeData = (data) => {
  return data.map(item => {
    switch (item['service_name']) {
      case 'Twitter':
        return shapeTwitterData(item);
      case 'Manual':
        return shapeManualData(item);
      case 'Instagram':
        return shapeInstagramData(item);
      default:
        return item;
    }
  })
};

export default shapeData;
