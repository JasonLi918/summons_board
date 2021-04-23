export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2983',
  			'Image':'https://imgur.com/1aLy246.jpg',
  			'Name_tc':'火裝姬',
  			'Name_jp':'聖遺解放フラマ',
  			'hp':'19000',
  			'Atk_before':'278x3(4)回',
  			'Atk_after':'284x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','反擊type'],
  			'Characteristic_Before':['貫通 Lv2','迴避性能 Lv2'],
  			'Characteristic_After':['貫通 Lv3','迴避性能 Lv2','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"火裝姬"
  		}
  	)
}