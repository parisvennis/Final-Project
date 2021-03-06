import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<div className="social">
						<span className="navbar-brand mb-0 mr-0 h1">
							<i className="fab fa-facebook-square" aria-hidden="true" />
							<i className="fab fa-instagram" aria-hidden="true" />
							<i className="fab fa-tumblr" aria-hidden="true" />
							<i className="fab fa-twitter" aria-hidden="true" />
							<i className="fab fa-youtube" aria-hidden="true" />
						</span>
					</div>
				</Link>

				<div className="logo" style={{ margin: "0 auto" }}>
					<img
						src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30163537/7_big7.png"
						width="250px"
						height="150px"
					/>
				</div>

				<div>
					<div className="logInQuery">
						<div className="search">
							<input
								id="nav-search-input"
								name="q"
								type="text"
								placeholder="Search Events"
								spellCheck="false"
								autoCorrect="off"
								autoCapitalize="off"
								autoComplete="off"
							/>
						</div>
						<div className="logInOut">
							<div className="btn-group" role="group" aria-label="Basic example">
								<button type="button" className="logIn btn btn-secondary">
									LOGIN
								</button>
								<button type="logOut button" className="logOut btn btn-secondary">
									LOGOUT
								</button>
								<button type="createAccount button" className="logOut btn btn-secondary">
									CREATE ACCOUNT
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* top navbar  */}

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#" />
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								HOME
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/events">
								EVENTS
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/planets">
								CALENDAR
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/planets">
								ABOUT US
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/planets">
								CONTACT US
							</Link>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link disabled" href="#">
								SERIES
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								INTERACTIVE
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								COMMUNITY
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								DATABANK
							</a>
						</li> */}
					</ul>
				</div>
			</nav>
		</>
	);
};
