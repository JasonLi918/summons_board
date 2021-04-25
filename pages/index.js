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
				<Menu title='機娘' data={selecttype('機娘',this.state.data)}/>
				<Menu title='封龍士' data={selecttype('封龍士',this.state.data)}/>
				<Menu title='天星' data={selecttype('天星',this.state.data)}/>
				<Menu title='真姬' data={selecttype('真姬',this.state.data)}/>
				<Menu title='精靈王' data={selecttype('精靈王',this.state.data)}/>
				<Menu title='星獸姬' data={selecttype('星獸姬',this.state.data)}/>
				<Menu title='天魔' data={selecttype('天魔',this.state.data)}/>
				<Menu title='天將' data={selecttype('天將',this.state.data)}/>
				<Menu title="不明系列(獸類)" data={selecttype('不明(獸類)',this.state.data)}/>
				<Menu title="不明系列(人類)" data={selecttype('不明(人類)',this.state.data)}/>
				<Menu title="不明系列(人類)" data={selecttype('不明(人類)-2',this.state.data)}/>
				<style jsx>{`
					div{
						width:80%;
						margin:0% 10%;
					}
				`}
				</style>
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