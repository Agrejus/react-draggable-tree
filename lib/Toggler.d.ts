import React = require('react');
export interface TogglerProps {
    collapsed: boolean;
    onClick: (ev: React.MouseEvent<Element>) => void;
}
export declare function Toggler(props: TogglerProps): JSX.Element;
