export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3524',
  			'Image':'https://imgur.com/ANXvVIO.jpg',
  			'Name_tc':'光星獸姬',
  			'Name_jp':'照星獣姫ロゼリ',
  			'hp':'15191',
  			'Atk_before':'356x3(4)回',
  			'Atk_after':'474x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','反擊type'],
  			'Characteristic_Before':['技能盾 Lv1','飛來吸收 Lv2'],
  			'Characteristic_After':['技能盾 Lv1','飛來吸收 Lv2','攻擊吸收 Lv2'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"光星獸姬"
  		}
  	)
}