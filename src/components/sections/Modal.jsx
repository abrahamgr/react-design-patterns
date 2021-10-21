import React, { useState } from "react";
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

export const UncontrolledModal = ({ children }) => {

    const [ show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true) }>Show Modal</button>
            {show && <ModalBackground>
                <ModalBody onClick={e => e.stopPropagation()}>
                    <button onClick={() => setShow(false) }>Hide Modal</button>
                    {children}
                </ModalBody>
            </ModalBackground>}
        </>
    );
};
export const ControlledModal = ({ show, onCloseModal, children }) => {
    return show ? (
        <>
        {show && <ModalBackground>
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={onCloseModal}>Hide Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>}
        </>
    ) : null;
};
export const Modal = ({ children }) => {

    const [ show, setShow ] = React.useState(false);
    
    return (
        <>
            <button onClick={() => setShow(true) }>Show Modal</button>
            {show && 
                <ControlledModal show={show} onCloseModal={() => setShow(false)}>
                    {children}
                </ControlledModal>
            }
        </>
    )
};