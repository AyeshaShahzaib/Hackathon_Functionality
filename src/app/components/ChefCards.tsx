// interface ChefProps {
//     name: string;
//     position: string;
//     experience: number;
//     specialty: string;
//     imageUrl: string;
//     description: string;
//     available: boolean;
//   }
  
//   const ChefCard = ({ name, position, experience, specialty, imageUrl, description, available }: ChefProps) => {
//     return (
//       <div className="chef-card">
//         <img src={imageUrl} alt={name} className="chef-image" />
//         <h2>{name}</h2>
//         <p><strong>Position:</strong> {position}</p>
//         <p><strong>Experience:</strong> {experience} years</p>
//         <p><strong>Specialty:</strong> {specialty}</p>
//         <p><strong>Description:</strong> {description}</p>
//         <p><strong>Status:</strong> {available ? 'Active' : 'Inactive'}</p>
//       </div>
//     );
//   };
  
//   export default ChefCard;

import Image from 'next/image';

interface ChefProps {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

const ChefCard = ({ name, position, experience, specialty, imageUrl, description, available }: ChefProps) => {
  return (
    <div className="chef-card">
      <Image
        src={imageUrl}
        alt={name}
        width={400} // You can adjust the width and height as needed
        height={400} // Same here
        className="chef-image"
      />
      <h2>{name}</h2>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Specialty:</strong> {specialty}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Status:</strong> {available ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default ChefCard;
