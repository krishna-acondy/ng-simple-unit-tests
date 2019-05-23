import { AppComponent } from './app.component';
import { AppTestModule } from './app.test.module';
import { setupTestModule, TestHarness, createTestHarness } from 'src/test/test-helpers';

describe('AppComponent', () => {
  let testHarness: TestHarness<AppComponent>;

  beforeEach(async () => {
    await setupTestModule(AppTestModule);
    testHarness = createTestHarness(AppComponent);
  });

  it('should create the app', () => {
    expect(testHarness.hasComponentCreated).toBeTruthy();
  });
});
