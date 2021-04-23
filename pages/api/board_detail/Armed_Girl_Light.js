export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2986',
  			'Image':'https://imgur.com/ytIMQ1O.jpg',
  			'Name_tc':'光裝姬',
  			'Name_jp':'聖遺解放エクレール',
  			'hp':'16532',
  			'Atk_before':'320x3(4)回',
  			'Atk_after':'327x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','輔助type'],
  			'Characteristic_Before':['飛行','詛咒 Lv3'],
  			'Characteristic_After':['飛行','詛咒 Lv3','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"光裝姬"
  		}
  	)
}