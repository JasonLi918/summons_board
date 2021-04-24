export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2763',
  			'Image':'https://i.imgur.com/nSP9lyh.jpg',
  			'Name_tc':'木精靈王',
  			'Name_jp':'木精霊王エダード',
  			'hp':'11756',
  			'Atk_before':'351x3(4)回',
  			'Atk_after':'459x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['貫通 Lv2','飛來吸收 Lv2'],
  			'Characteristic_After':['貫通 Lv2','飛來吸收 Lv2','技能盾 Lv1'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"木精靈王"
  		}
  	)
}