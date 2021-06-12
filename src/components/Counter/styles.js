import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 1px solid lightgray;
	width: 20rem;
	padding: 1rem;
	border-radius: 5px;
	margin: auto;
	margin-top: 5rem;
`;

export const Title = styled.h2``;

export const Count = styled.span``;

export const ButtonContainer = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 15.5rem;
`;

export const Button = styled.button`
	width: 7.5rem;
	height: 2.5rem;
	border: none;
	background-color: #1a73e8;
	color: #fff;
	font-size: 1.1rem;
	border-radius: 5px;

	&:hover {
		cursor: pointer;
		background-color: #fff;
		color: #1a73e8;
		border: 1px solid #1a73e8;
	}
`;
