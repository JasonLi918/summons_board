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
								<TypeListImg typelist={this.state.data.Type}/>
							</td>
							<td>
								<ListText listinfo={this.state.data.Type}/>
							</td>
						</tr>
						<tr>
							<td>覺醒玉消耗</td>
							<td colSpan="2">{this.state.data.Tp_Transform}</td>
						</tr>
						<tr>
							<td>特性[覺醒前]</td>
							<td>
								<CharacteristicImg characteristicinfo={this.state.data.Characteristic_Before}/>
							</td>
							<td>
								<ListText listinfo={this.state.data.Characteristic_Before}/>
							</td>
						</tr>
						<tr>
							<td>特性[覺醒後]</td>
							<td>
								<CharacteristicImg characteristicinfo={this.state.data.Characteristic_After}/>
							</td>
							<td>
								<ListText listinfo={this.state.data.Characteristic_After}/>
							</td>
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

				`}
				</style>
			</div>
		)
	}

}

function TypeListImg(props){
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
		<div key={index+"typeimg"} className="typeimg">
			<img src={element}/>
		</div>
	);

	return(
		<div>{listItems}</div>
	)
}

function ListText(props){
	let listinfo = (props.listinfo);
	let textlist;
	
	if(listinfo != undefined){
		textlist = listinfo.map((element,index)=>
			<div key={index+"typetext"} >{element}</div>
		);
	}

	return(
		<div>{textlist}</div>
	)
}

function CharacteristicImg(props){
	let characteristicinfo = (props.characteristicinfo);
	let characteristiclist = [];
	
	if(characteristicinfo != undefined){
		characteristicinfo.forEach((element)=>{
			switch(element){
				case "全體化":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/all.png");
					break;
				case "飛行":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/fly.png");
					break;
				case "貫通 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kantsu.png");
					break;
				case "貫通 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kantsu2.png");
					break;
				case "貫通 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kantsu3.png");
					break;
				case "貫通LV2&Boss殺手":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kantsugiant.png");
					break;
				case "技能盾 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/barrier1.png");
					break;
				case "技能盾 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/barrier_2.png");
					break;
				case "技能盾 Lv1&追加攻擊":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/barrier2.png");
					break;
				case "技能盾 Lv2&追加攻擊":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/barrier2_2.png");
					break;
				case "物理盾 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/barrier_physical1.png");
					break;
				case "對空攻擊 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/flyingkiller.png");
			}
		})
	}

	let listItems = characteristiclist.map((element,index)=>
		<div key={index+"characteristicimg"} className="characteristiclistimg">
			<img src={element}/>
		</div>
	);

	return(
		<div>{listItems}</div>
	)
}

export default Post
