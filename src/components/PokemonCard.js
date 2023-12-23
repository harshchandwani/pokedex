import React from 'react'

const PokemonCard = ({props}) => {
  const {name, url} = props;
  const pattern = /\/(\d+)\/$/;
  const match = url.match(pattern);
  const extractedNumber = match[1];
  const getRandomColor = () => {
    // Generate a random hex color code
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };
  const imageLink = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/"
  const imageUrl = `${imageLink}${extractedNumber}.svg`;
  const backgroundColor = getRandomColor();
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={`min-w-[240px] h-32 mx-auto bg-white rounded-xl overflow-hidden shadow-lg my-4`} style={{ backgroundColor }}>
      <div className="flex">
        <div className="p-4">
          <p className="text-xl font-bold">{capitalizedName}</p>
        </div>
        <div className="p-4 flex-shrink-0">
          <img
            src={imageUrl}
            alt={`Pokemon ${extractedNumber}`}
            className="w-20 h-20 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default PokemonCard;