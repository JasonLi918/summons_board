export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'1844',
  			'Image':'https://i.imgur.com/6bBsDRn.jpg',
  			'Name_tc':'炎龍王',
  			'Name_jp':'炎鳳竜王・レプティアス',
  			'hp':'13467',
  			'Atk_before':'286x3(4)回',
  			'Atk_after':'345x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['飛行','全體化'],
  			'Characteristic_After':['飛行','全體化','技能盾 Lv1'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"初代火限"
  		}
  	)
}