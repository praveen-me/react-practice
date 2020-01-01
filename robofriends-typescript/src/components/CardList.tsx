import * as React from 'react';
import Card from './Card';
import { IRobot } from './../containers/App';

interface CardListProps {
	robots: Array<IRobot>;
}

const CardList: React.SFC<CardListProps> = ({ robots }) => {
	return (
		<div>
			{robots.map((robot, i) => {
				return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
			})}
		</div>
	);
};

export default CardList;
