import React from 'react';

interface ButtonPropsModel {
    className?: string,
    href?: string,
}

class ButtonLink extends React.Component<ButtonPropsModel, {}> {

    constructor(props: any) {
        super(props);
        console.log(props);
    }

    private static defaultProps: ButtonPropsModel = {
        className: "default",
        href: "/"
    }

    render(): JSX.Element {
        return (
            <a href={this.props.href} className={this.props.className}>
                {this.props.children}
            </a>
        );
    }
}

export default ButtonLink;

// type ButtonPropsModel = {
//     className: string,
//     href: string,
// }

// type ButtonDefaultProps:

// function ButtonLink(props: ButtonPropsModel) {

//     return (
//         <a href={props.href} className={props.className}>
//             Novo vídeo
//         </a>
//     );
// }

// export default ButtonLink;