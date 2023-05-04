 // andhika pratama putra
    function hitungSubnetMask(event) {
      event.preventDefault();
      // IP Address Calc | This Program Using Indonesian Language 
      
      const ipAddress = document.getElementById('ip-address').value;
      const oktet = ipAddress.split('.');

      // Menentukan kelas IP address
      let ipAddressKelas = '';
      if (oktet[0] >= 1 && oktet[0] <= 126) {
        ipAddressKelas = 'Kelas : A';
      } else if (oktet[0] >= 128 && oktet[0] <= 191) {
        ipAddressKelas = 'Kelas : B';
      } else if (oktet[0] >= 192 && oktet[0] <= 223) {
        ipAddressKelas = 'Kelas : C';
      } else if (oktet[0] >= 224 && oktet[0] <= 239) {
        ipAddressKelas = 'Kelas : D';
      } else if (oktet[0] >= 240 && oktet[0] <= 255) {
        ipAddressKelas = 'Kelas : E';
      }

      // Menentukan Subnetmask berdasarkan kelas IP address
      let subnetMask = '';
      switch (ipAddressKelas) {
        case 'Kelas : A':
          subnetMask = '255.0.0.0';
          break;
        case 'Kelas : B':
          subnetMask = '255.255.0.0';
          break;
        case 'Kelas : C':
          subnetMask = '255.255.255.0';
          break;
        case 'Kelas : D':
          subnetMask = 'N/A';
          break;
        case 'Kelas : E':
          subnetMask = 'N/A';
          break;
        default:
          subnetMask = 'IP Address Tidak Valid';
          break;
      }

      // Menampilkan hasil
      const resultDiv = document.getElementById('hasil');
      resultDiv.innerHTML = `
      <p>IP Address: ${ipAddress}</p>
      <p>${ipAddressKelas}</p>
      <p>Subnet Mask: ${subnetMask}</p>
      `;
    }