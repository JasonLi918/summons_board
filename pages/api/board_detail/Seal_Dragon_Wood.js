export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3505',
  			'Image':'https://imgur.com/JyqEVAC.jpg',
  			'Name_tc':'木封龍',
  			'Name_jp':'深碧竜神獣フリネーダ',
  			'hp':'14624',
  			'Atk_before':'472x3(4)回',
  			'Atk_after':'504x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type'],
  			'Characteristic_Before':['防禦性能 Lv3','飛來吸收 Lv2'],
  			'Characteristic_After':['防禦性能 Lv3','飛來吸收 Lv2','對地攻擊 Lv1'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"木封龍"
  		}
  	)
}