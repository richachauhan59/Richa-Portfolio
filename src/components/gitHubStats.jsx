import React, { Component } from 'react'

export default class GitHubStats extends Component {
    componentDidMount() {
        const script = document.createElement("script");
    
        script.innerHTML='GitHubCalendar(".calendar", "richachauhan59", { responsive: true, global_stats: false, tooltips: true });'
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <div style={{textAlign:"center"}}> <p className="h2 py-5">Github Contributions</p></div>
				<div className="calendar container rounded bg-white  py-4 px-4">
					Loading the data just for you.
				</div>

				<div className="d-flex justify-content-center my-5">
					<div className="bg-dark rounded text-center text-white p-5 m-5" style={{width: "250px" ,height: "230px", padding:"50px"}}>
						<h3>1200+</h3>
						<h3>Hours</h3>
						<h3>of coding</h3>
					</div>
					<div className="bg-dark rounded text-center text-white p-5 m-5" style={{width: "250px", height:"230px", padding:"50px"}}>
						<h3>400+</h3>
						<h3>Git</h3>
						<h3>Commits</h3>
					</div>
					<div className="bg-dark rounded text-center text-white p-5 m-5"style={{width: "250px", height:"230px", padding:"50px"}}>
						<h3>285+</h3>
						<h3>HackerRank and OJ</h3>
						<h3>Problems</h3>
					</div>
				</div>
            </div>
        )
    }
}

