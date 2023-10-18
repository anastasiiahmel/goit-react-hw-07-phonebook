
import { ContainersStyle } from './Container.styled';



export const Containers = ({title, children}) => {
    return(
        <ContainersStyle>
            <h2 className='title'>{title}</h2>
            {children}
        </ContainersStyle>
    );
};



