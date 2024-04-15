import Image from "next/image";

const ItemSkill = ({logo, title}: { logo: string, title: string }) => {
    return (
        <div
            className={`
            h-32
            justify-center
            flex space-y-2 
            border border-orange-500 rounded-md
             p-3 flex-col items-center hover:shadow-lg
              hover:shadow-orange-800
                transition-all
                duration-300
                ease-in-out
                hover:-translate-y-1
              `}>
            <Image src={`/svg/${logo}.svg`} width={50} height={50}
                   alt={`mardiancode-${logo}`}/>
            <span className={`capitalize`}>{title}</span>
        </div>
    );
};

export default ItemSkill;
