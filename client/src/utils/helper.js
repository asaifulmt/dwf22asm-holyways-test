export function convertToRupiah(angka) {
  let rupiah = ''
  const angkarev = angka.toString().split('').reverse().join('')
  for (var i = 0; i < angkarev.length; i++) {
    if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
  }
    
  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  )
}

export function getTotal(userDonate) {
  const total = userDonate.map((user) => {
    if(user.status === 'success') {
      return user.donateAmount
    }
    return 0
  }).reduce((total, num) => total + num, 0)

  return total
}

export function getProgress(userDonate, goal) {
  const total = getTotal(userDonate)
  const percent = (total / goal) * 100
  return percent
}
