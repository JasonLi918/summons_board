export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'1847',
  			'Image':'https://i.imgur.com/51pfFrZ.jpg',
  			'Name_tc':'黑雷王',
  			'Name_jp':'黒撃雷王・ロンドハーケン',
  			'hp':'14403',
  			'Atk_before':'294x3(4)回',
  			'Atk_after':'323x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','反擊type'],
  			'Characteristic_Before':['飛行','貫通 Lv2'],
  			'Characteristic_After':['飛行','貫通 Lv2','技能盾 Lv1'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"初代暗限"
  		}
  	)
}