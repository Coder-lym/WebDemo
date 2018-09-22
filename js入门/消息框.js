function disp_alert(){
			alert("我是警告框！！！");
		}
function disp_confirm(){
			var r=confirm("请您选择");
			if (r==true)
			{
				document.write("您按了确认！");
			} 
			else
			{
				document.write("您按了取消！");
			}
		}
function disp_prompt(){
			var age=prompt("请输入您的年龄");
			if (age>=18) {
				document.write("您已经成年了！");
			} else{
				document.write("对不起，您还未成年！");
			}
		}