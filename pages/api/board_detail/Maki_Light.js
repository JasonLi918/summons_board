export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2411',
  			'Image':'https://i.imgur.com/CITz0r9.jpg',
  			'Name_tc':'光真姬',
  			'Name_jp':'聖遺解放アルシェ',
  			'hp':'13423',
  			'Atk_before':'330x3(4)回',
  			'Atk_after':'402x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','防禦type'],
  			'Characteristic_Before':['貫通 Lv2','對空攻擊 Lv1'],
  			'Characteristic_After':['貫通 Lv2','對空攻擊 Lv1','技能盾 Lv1'],
  			'Tp_Transform':'20',
  			'Tp_Characteristic':'技能加速',
  			'Comment':"光真姬"
  		}
  	)
}