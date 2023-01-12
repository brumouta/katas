from unittest import TestCase
from unittest.mock import patch

from main import print_hi


class Test(TestCase):

    @patch('builtins.print')
    def test_print_hi(self, mock_print):
        print_hi('test')
        mock_print.assert_called_with('Hi, test')

