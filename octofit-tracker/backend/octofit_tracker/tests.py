from django.test import TestCase
from .models import Team, UserProfile, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        self.team = Team.objects.create(name='Test Team')
        self.user = UserProfile.objects.create(name='Test User', email='test@example.com', team=self.team)

    def test_team_creation(self):
        self.assertEqual(self.team.name, 'Test Team')

    def test_user_creation(self):
        self.assertEqual(self.user.email, 'test@example.com')

    def test_activity_creation(self):
        activity = Activity.objects.create(user=self.user, type='run', distance=5)
        self.assertEqual(activity.type, 'run')

    def test_workout_creation(self):
        workout = Workout.objects.create(user=self.user, workout='Pushups', reps=10)
        self.assertEqual(workout.reps, 10)

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.create(user=self.user, points=100)
        self.assertEqual(leaderboard.points, 100)
