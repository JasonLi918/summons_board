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
			<div>
				<Menu title='獸王' data={selecttype('獸王',this.state.data)}/>
				<Menu title='獸帝' data={selecttype('獸帝',this.state.data)}/>
				<Menu title='裝姬' data={selecttype('裝姬',this.state.data)}/>
				<Menu title='古龍' data={selecttype('古龍',this.state.data)}/>
				<Menu title='三創神' data={selecttype('三創神',this.state.data)}/>
				<Menu title='獸操士' data={selecttype('獸操士',this.state.data)}/>
			</div>
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
				限定系列:{this.props.title}
				<table>
					<tbody>
						<tr>
							{data.map((value,index)=>{
								return (
									<td key={value.name}>
										<Link href={'/board_info/'+value.name}>
											<a>
												<img src={value.img}/> <br/>
												簡稱: {value.tc_name} <br/>
												日文名稱: {value.jp_name}
											</a>
										</Link>
									</td>)
							})}
						</tr>
					</tbody>
				</table>
				<style jsx>{`
					table{
						width:100%;
					}

					tr{
						text-align:center;
					}

			        td{
			        	width:20%;
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
	return result;
}

export default HomePage