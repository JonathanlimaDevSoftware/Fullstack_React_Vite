import React from "react";
import * as C from './styled';

interface PainelItemsProps {
    children: React.ReactNode;
}

const PainelItems: React.FC<PainelItemsProps> = ({ children }) => {
    return (
        <C.PainelItems>
            {children} {/* Renderiza os elementos filhos passados */}
        </C.PainelItems>
    );
};

export default PainelItems;