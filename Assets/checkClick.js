#pragma strict

var player: GameObject;
var hitPlane: GameObject;

function Start () {
	hitPlane.renderer.enabled = false;
}

function Update () {
    var hit : RaycastHit;
    var ray : Ray;
    var hitPlanePos = hitPlane.transform.position;
    hitPlane.transform.position = new Vector3(hitPlane.transform.position.x, hitPlane.transform.position.y, player.transform.position.z);
    ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var layerMask = 1 << 8;
    if (Physics.Raycast (ray, hit, Mathf.Infinity, layerMask)) {
		player.transform.position = new Vector3(hit.point.x, hit.point.y, player.transform.position.z);
    }
}