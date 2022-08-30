import React from 'react';
import {
	AreaChart,
	Area,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ReferenceLine,
	PolarGrid,
	RadarChart,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	Legend,
} from 'recharts';

const user = JSON.parse(localStorage.getItem('user'));

const Account = () => {
	const data2 = [
		{
			subject: 'Math',
			A: 120,
			B: 110,
			fullMark: 150,
		},
		{
			subject: 'Chinese',
			A: 98,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'English',
			A: 86,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'Geography',
			A: 99,
			B: 100,
			fullMark: 150,
		},
		{
			subject: 'Physics',
			A: 85,
			B: 90,
			fullMark: 150,
		},
		{
			subject: 'History',
			A: 65,
			B: 85,
			fullMark: 150,
		},
	];

	const data = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	console.log(user);
	return (
		<div>
			<h1>Account</h1>
			{user.is_staff ? <h3>I am staff boy</h3> : <h3>Not Staff</h3>}

			<div className='charts'>
				<div className='chart'>
					<AreaChart
						data={data}
						width={530}
						height={250}
						margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
					>
						<XAxis dataKey='name' />
						<YAxis />
						<CartesianGrid strokeDasharray='3 3' />
						<Tooltip />
						<ReferenceLine x='Page C' stroke='green' label='Min PAGE' />
						<ReferenceLine
							y={4000}
							label='Max'
							stroke='red'
							strokeDasharray='3 3'
						/>
						<Area
							type='monotone'
							dataKey='uv'
							stroke='#8884d8'
							fill='#8884d8'
						/>
					</AreaChart>
				</div>
				<div className='chart'>
					<RadarChart outerRadius={90} width={530} height={250} data={data2}>
						<PolarGrid />
						<PolarAngleAxis dataKey='subject' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} />
						<Radar
							name='Mike'
							dataKey='A'
							stroke='#8884d8'
							fill='#8884d8'
							fillOpacity={0.6}
						/>
						<Radar
							name='Lily'
							dataKey='B'
							stroke='#82ca9d'
							fill='#82ca9d'
							fillOpacity={0.6}
						/>
						<Legend />
					</RadarChart>
				</div>
			</div>
		</div>
	);
};

export default Account;
