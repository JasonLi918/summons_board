export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2987',
  			'Image':'https://imgur.com/NJOFmRA.jpg',
  			'Name_tc':'暗裝姬',
  			'Name_jp':'聖遺解放フォンセ',
  			'hp':'15236',
  			'Atk_before':'298x3(4)回',
  			'Atk_after':'354x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['貫通 Lv2','對空攻擊 Lv1'],
  			'Characteristic_After':['貫通 Lv3','對空攻擊 Lv1','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"暗裝姬"
  		}
  	)
}