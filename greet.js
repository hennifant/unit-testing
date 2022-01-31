export function greet(name = 'stranger') {
  if (name === 'Jerry' || name === 'Paul' || name === 'Mareike') {
    return 'Hello coach!';
  }
  return 'Hello ' + name + '!';
}
