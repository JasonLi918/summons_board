import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router'

function Post(){
  const router = useRouter()
  const { boardname } = router.query;

  return <DetailInfo post={ boardname }/>
}

class DetailInfo extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			data:[]
		}
	}

	componentDidMount(){
	   this.ajaxgetData();
	}

	ajaxgetData(){
		if(this.props.post == undefined){
			setTimeout(()=>{
				this.ajaxgetData()
			},500)
		}else{
			fetch(`/api/board_detail/${this.props.post}`)
			     .then(res => res.json())
			     .then(
			       (result) => {
			         this.setState({
			          data:result
			         })
			       },
			       (error) => {

			       }
			)
		}
	}

	render(){
		return(
			<div>
				<table>
					<tbody>
						<tr>
							<td colSpan="2">Title</td>
						</tr>
						<tr>
							<td>棋寵編號</td>
							<td>{this.state.data.Number}</td>
						</tr>
						<tr>
							<td colSpan="2">
								<img src={this.state.data.Image}/>
							</td>
						</tr>
						<tr>
							<td>中文名稱</td>
							<td>{this.state.data.Name_tc}</td>
						</tr>
						<tr>
							<td>日文名稱</td>
							<td>{this.state.data.Name_jp}</td>
						</tr>
					</tbody>
				</table>

				<table>
					<tbody>
						<tr>
							<td colSpan="2">＊ LV . MAX ＊</td>
						</tr>
						<tr>
							<td>HP</td>
							<td>{this.state.data.hp}</td>
						</tr>
						<tr>
							<td>攻擊力(覺醒前)</td>
							<td>{this.state.data.Atk_before}</td>
						</tr>
						<tr>
							<td>攻擊力(覺醒後)</td>
							<td>{this.state.data.Atk_after}</td>
						</tr>
						<tr>
							<td>最大魂格數量</td>
							<td>{this.state.data.Soul}</td>
						</tr>
					</tbody>
				</table>

				<table>
					<tbody>
						<tr>
							<td>Type</td>
							<td>
								<TypeList typelist={this.state.data.Type}/>
							</td>
							<td>
								{this.state.data.Type}
							</td>
						</tr>
						<tr>
							<td>覺醒玉消耗</td>
							<td colSpan="2">{this.state.data.Tp_Transform}</td>
						</tr>
						<tr>
							<td>特性[覺醒前]</td>
							<td></td>
							<td>{this.state.data.Characteristic_Before}</td>
						</tr>
						<tr>
							<td>特性[覺醒後]</td>
							<td></td>
							<td>{this.state.data.Characteristic_After}</td>
						</tr>
						<tr>
							<td>覺醒特性</td>
							<td colSpan="2">{this.state.data.Tp_Characteristic}</td>
						</tr>
					</tbody>
				</table>

				<Link href='/'>
					<a>
						<button>Back to Home Page</button>
					</a>
				</Link>
				<style jsx>{`
				table{
					margin-bottom:20px;
				}

				td{
					border:1px solid #ffffff;
					text-align:center;
					padding:5px;
				}

				.typeimg{
					display:inline;
				}

				.typeimg img{
					width:90px;
				}

				`}
				</style>
			</div>
		)
	}

}

function TypeList(props){
	let typeinfo = (props.typelist);
	let typelist = [];
	
	if(typeinfo != undefined){
		typeinfo.forEach((element)=>{
			if(element == "攻擊type"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_offensive.png");
			}else if(element == "平衡type"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_balance.png");
			}else if(element == "HPtype"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_hitpoint.png");
			}

			if(element == "強襲type"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_attack.png");
			}else if(element == "砲擊type"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_skillattack.png");
			}else if(element == "防禦type"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_defense.png");
			}else if(element == "輔助type"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_assist.png");
			}else if(element == "反擊type"){
				typelist.push("http://sb.aaa5207577.net/wp-content/uploads/2015/10/icon_counter.png");
			}

		})
	}

	let listItems = typelist.map((element,index)=>
		<div key={index} className="typeimg">
			<img src={element}/>
		</div>
	);

	console.log(listItems);


	return(
		<div>{listItems}</div>
	)
}

export default Post
