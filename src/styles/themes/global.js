import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
		margin: 0;
		padding: 0;
		font-family: 'Open Sans', sans-serif, Arial;
		font-size: 12px;
		overflow-y: scroll;
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
		padding: 0;
		vertical-align: baseline;
		text-decoration: none;
	}

	#root {
		margin: 30px auto 20px auto;
		width: 860px;
	}

	@media only screen and (max-width: 959px) and (min-width: 768px) {
		#root {
			width: 750px;
		}
	}
	
	@media only screen and (max-width: 767px) and (min-width: 500px) {
		#root {
			width: 470px;
		}
	}
	
	@media only screen and (max-width: 499px) {
		#root {
			width: 92%;
		}
	}
`;

export const TabStyles = createGlobalStyle`
	.ReactCollapse--collapse {
		transition: height 500ms;
	}

	.react-tabs__tab:focus:after {
		background: transparent;
	}

	.react-tabs {
		text-align: center;
		box-shadow: ${({ theme }) => theme.tabsBoxShadow};
		background-color: ${({ theme }) => theme.tabs};
	}

	.react-tabs__tab-list {
		border: none;
		margin-bottom: 0;
	}

	.react-tabs__tab {
		padding: 12px 50px 5px;
		background-color: transparent;
		border: none;
		font-size: 14px;
		color: ${({ theme }) => theme.tabsButton};
	}

	.react-tabs__tab:focus {
		box-shadow: none;
	}

	.react-tabs__tab:hover {
		transition: all 300ms ease-in-out;
		transform: translateY(-3px);
	}

	.react-tabs__tab--selected {
		transition: all 300ms ease-in-out;
		color: ${({ theme }) => theme.secondaryText};
	}

	@media only screen and (max-width: 767px) and (min-width: 486px) {
		.react-tabs__tab {
			padding: 12px 30px 5px;
		}
	}

	@media only screen and (max-width: 485px) {
		.react-tabs__tab {
			padding: 12px 15px 5px;
		}
	}
`;
