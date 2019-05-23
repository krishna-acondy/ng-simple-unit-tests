import { DashboardComponent } from './dashboard.component';
import { setupTestModule, TestHarness, createTestHarness } from 'src/test/test-helpers';
import { DashboardTestModule } from './dashboard.test.module';

describe('DashboardComponent', () => {
  let testHarness: TestHarness<DashboardComponent>;

  beforeEach(async () => {
    await setupTestModule(DashboardTestModule);
    testHarness = createTestHarness(DashboardComponent);
  });

  it('should create', () => {
    expect(testHarness.hasComponentCreated).toBeTruthy();
  });
});
