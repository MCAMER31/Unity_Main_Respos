var showGui : boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerStay (other : Collider) {
    if(other.gameObject.tag == "dominos")
    {
    	showGui = false;    
    }
    else
    { showGui = true; }
}

function OnGUI()
{
	if (showGui == true)
	{
		GUI.Label(Rect(Screen.width/2, Screen.height/2, 200, 200), "Well Done");
	}
}