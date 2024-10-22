interface HeadingProps {
    title: string;
    description: string;
}

const Heading: React.FC<HeadingProps> = ({title, description}) => {
    return ( 
        <div>
            <h2 className="text-3xl font-bold tracking-tight font-sans">{title}</h2>
            <p className="text-muted-foreground text-lg mb-6">{description}</p>
        </div>
     );
}
 
export default Heading;