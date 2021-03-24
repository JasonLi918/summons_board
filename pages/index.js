import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

class HomePage extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[]
		}
	}

	componentDidMount() {
	    fetch("/api/board_list")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	          	data: result
	          });
	        },
	        (error) => {

	        }
	      )
	}

	render(){
		return(
			<Menu title='Testing' data={selecttype('1',this.state.data)}/>
		)
	}

}

class Menu extends React.Component{
	constructor(){
		super();
		this.state = {

		}
	}

	render(){
		let data = this.props.data;
		return(
			<div>
				Title:{this.props.title}
				<table>
					<tbody>
						<tr>
							{data.map((value,index)=>{
								return (
									<td key={value.name}>
										<Link href={'/board_info/'+value.name}>
											<a>{value.name}</a>
										</Link>
									</td>)
							})}
						</tr>
					</tbody>
				</table>
				<style jsx>{`
			        td{
			        	border:1px solid #ffffff;
			        	padding:5px;
			        }
			        div{
			        	margin-bottom:20px;
			        }
			        a{
			        	color:white;
			        	text-decoration:none;
			        }
			     `}</style>
			</div>
		)
	}
}

function selecttype(target,data){
	let result = [];

	data.forEach((element,index)=>{
		if(element.type == target){
			result.push(element)
		}
	})
	console.log(result);
	return result;
}

export default HomePage