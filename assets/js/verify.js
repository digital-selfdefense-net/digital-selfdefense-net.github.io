var ciphertext = 'eyJpdiI6ImRDc2Yxc3NSMkpKZUp1VzBlSTVBS0E9PSIsInYiOjEsIml0ZXIiOjEwMDAwLCJrcyI6MTI4LCJ0cyI6NjQsIm1vZGUiOiJjY20iLCJhZGF0YSI6IiIsImNpcGhlciI6ImFlcyIsInNhbHQiOiJvMHM3K21BV0FoZz0iLCJjdCI6IkFGamowTzZlMmZVYnJnR2x3R0huSncrMzcreTdzUnZoakNCbHNGMVB0YjNON2tCNU1lcjc4TXRYdUc4SSsySi9ISzdoUWd0NWIwZUpHOXA3ckY5OHBKbTRlNng4OE1DRFJKYkJTRlNEMWFKc3I5SjA1RG5hU0ZpVDJveVZEVi9STWFIWFFVeWt5czlPanVwOXVxUHFhZVQrMkJQWE4yRk9Dc2NBQ0JLbUp0SnU1NlA5MElCQUU4ZUlaTWJmUEszWWlEcnNMRWRYL0Q2UjRpbnY5M3lVMFdLcy94Y1M4RG1IcGhjVHRHTktWMjNWTG0vQ0pUeUFOS3AvMU42UWsrb2FSWjFjYjh4REJiOUc3U0hIV3phcy9IY0JmQUJhOFo5SVBPUHR4WVFDWVg2QnQ2a1RZMjFMaTlhSnFNdDZ6eXYxVk8vUlUrOVFDeGwvRUM3NnU3ZkpGN241REdEWTFJY2V3QzF2dlhLR1VWbWhWSlJvTE5HNGI5MWs0YklNNGxFSGNKMUJnT1NjMTlXRitVZnJ4QUllOHM5K3E2Rm9MNEFORDd6RGNxRloveUNEWVhLMjcydDRyTEUwd21LWnJrOUFNSzBuTlNhWHhkSlF2QT09In0=';

if(window.location.hash) {
    ciphertext = atob(ciphertext);
	var hash = window.location.hash.substring(1);
	var member_id = parseInt(hash.substring(2, 6));
	var outer_key = hash.substring(10, 20);
	var inner_key = hash.substring(20, 35);
	var c_members = sjcl.decrypt(outer_key, ciphertext);
	var c_member = c_members.split("<>")[member_id-1];
	p_member = sjcl.decrypt(inner_key, c_member);        
	document.getElementsByTagName("b")[0].innerHTML = p_member;
} else {
  alert("Nope");
}




