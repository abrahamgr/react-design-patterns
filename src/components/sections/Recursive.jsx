import { BigSuccess, BigSuccessBase, Button, ButtonBase, DangerButton, DangerButtonBase, RecursiveComponent } from "..";

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

export const Recursive = () => {
    return <>
        <h2>Recursive component</h2>
        <RecursiveComponent data={nestedObject} />

        <h2>Composition</h2>
        <Button text="Normal" />
        <br/>
        <DangerButton text="Danger" />
        <br/>
        <BigSuccess text="Big success" />

        <h2>Partially</h2>
        <ButtonBase text="Normal" />
        <br/>
        <DangerButtonBase text="Danger" />
        <br/>
        <BigSuccessBase text="Big success" />
    </>;
};