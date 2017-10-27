import app from '../../app';

export default function* saga() {
  yield [
    app.saga(),
  ];
}
