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
        <img src={imageUrl} alt={name} className="chef-image" />
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