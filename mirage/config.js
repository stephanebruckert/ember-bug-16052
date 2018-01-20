export default function() {
  this.passthrough();

  this.get('/dummies/:id');
  this.get('/subs/:id');
}
