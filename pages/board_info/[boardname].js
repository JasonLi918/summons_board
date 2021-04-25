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
		const atkAfter = this.state.data.Atk_after;
		let Characteristic;
		if(atkAfter != ""){
			Characteristic = {display:''}
		}else{
			Characteristic = {display:'none'}
		}

		return(
			<div>
				<table>
					<tbody>
						<tr>
							<td>棋寵編號</td>
							<td>{this.state.data.Number}</td>
						</tr>
						<tr>
							<td colSpan="2">
								<img src={this.state.data.Image} className="iconimg"/>
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
							<td>攻擊力( 無覺醒 / 覺醒前 )</td>
							<td>{this.state.data.Atk_before}</td>
						</tr>
						<tr style={Characteristic}>
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
						<tr style={Characteristic}>
							<td>覺醒玉消耗</td>
							<td colSpan="2">{this.state.data.Tp_Transform}</td>
						</tr>
						<tr>
							<td>特性[ 無覺醒 / 覺醒前 ]</td>
							<td>
								<CharacteristicImg characteristicinfo={this.state.data.Characteristic_Before}/>
							</td>
							<td>
								<ListText listinfo={this.state.data.Characteristic_Before}/>
							</td>
						</tr>
						<tr style={Characteristic}>
							<td>特性[覺醒後]</td>
							<td>
								<CharacteristicImg characteristicinfo={this.state.data.Characteristic_After}/>
							</td>
							<td>
								<ListText listinfo={this.state.data.Characteristic_After}/>
							</td>
						</tr>
						<tr style={Characteristic}>
							<td>覺醒特性</td>
							<td colSpan="2">{this.state.data.Tp_Characteristic}</td>
						</tr>
					</tbody>
				</table>

				<table>
					<tbody>
						<tr>
							<td>棋寵評論</td>
						</tr>
						<tr>
							<td dangerouslySetInnerHTML={{ __html: this.state.data.Comment }}></td>
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
					width:100%;
				}

				td{
					border:1px solid #ffffff;
					text-align:center;
					padding:5px;
				}

				div{
					margin:2% 25%;
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
					break;
				case "對空攻擊 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/flyingkiller2.png");
					break;
				case "對地攻擊 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/groundkiller.png");
					break;
				case "對地攻擊 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/groundkiller2.png");
					break;
				case "愛心UP":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/heartup.png");
					break;
				case "攻擊吸收 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kyusyu.png");
					break;
				case "攻擊吸收 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kyusyu2.png");
					break;
				case "攻擊吸收 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kyusyu3.png");
					break;
				case "防禦性能 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/bougyo1.png");
					break;
				case "防禦性能 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/bougyo2.png");
					break;
				case "防禦性能 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/bougyo3.png");
					break;
				case "飛來吸收 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/hirai1.png");
					break;
				case "飛來吸收 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/hirai2.png");
					break;
				case "飛來吸收 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/hirai3.png");
					break;
				case "詛咒 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/curse1.png");
					break;
				case "詛咒 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/curse2.png");
					break;
				case "詛咒 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/curse3.png");
					break;
				case "迴避性能 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kaihi1.png");
					break;
				case "迴避性能 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kaihi2.png");
					break;
				case "迴避性能 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kaihi3.png");
					break;
				case "不意打 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/fuiuchi1.png");
					break;
				case "不意打 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/fuiuchi2.png");
					break;
				case "不意打 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/fuiuchi3.png");
					break;
				case "高速移動 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kousoku1.png");
					break;
				case "高速移動 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kousoku2.png");
					break;
				case "高速移動 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/kousoku3.png");
					break;
				case "陷阱解除 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/trap.png");
					break;
				case "陷阱解除 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/trap2.png");
					break;
				case "不動 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/knockback.png");
					break;
				case "不動 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/knockback2.png");
					break;
				case "道具吸收 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/item.png");
					break;
				case "道具吸收 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/item2.png");
					break;
				case "傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou1.png");
					break;
				case "物理傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_physical2.png");
					break;
				case "技能傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_skill2.png");
					break;
				case "火屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_f1.png");
					break;
				case "火屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_f2.png");
					break;
				case "火屬性傷害輕減 Lv3":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_f3.png");
					break;
				case "水屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_w1.png");
					break;
				case "水屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_w2.png");
					break;
				case "木屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_t1.png");
					break;
				case "木屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_t2.png");
					break;
				case "光屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_l1.png");
					break;
				case "光屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_l2.png");
					break;
				case "暗屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_d1.png");
					break;
				case "暗屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_d2.png");
					break;
				case "火・木屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_ft2.png");
					break;
				case "火・光屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_fl1.png");
					break;
				case "火・光屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_fl2.png");
					break;
				case "火・暗屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_fd2.png");
					break;
				case "水・木屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_wt2.png");
					break;
				case "水・暗屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_wd2.png");
					break;
				case "光・暗屬性傷害輕減 Lv1":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_ld1.png");
					break;
				case "光・暗屬性傷害輕減 Lv2":
					characteristiclist.push("https://sb.gungho.jp/member/ability/img/icon/mukou_ld2.png");
					break;
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
