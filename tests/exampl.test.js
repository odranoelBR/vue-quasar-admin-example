import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://localhost:8080`

test('My first test', async t => {
  const title = await Selector('#content-header-title').addCustomDOMProperties({innerHTML: el => el.innerHTML})
  await t
    .resizeWindow(1920, 1080)
    .click('.drawer-closer+ .drawer-closer .item-content')
    .expect(title.innerHTML).contains('Pricing')
})
test('My second test', async t => {
  const totalCommentsCard = await Selector('.bg-teal-7 h5').addCustomDOMProperties({innerHTML: el => el.innerHTML})
  await t
    .resizeWindow(1920, 1080)
    .click('.drawer-closer:nth-child(2) .item-content')
    .expect(totalCommentsCard.innerHTML).eql('499')
})

